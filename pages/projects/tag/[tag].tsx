import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import Heading from "components/projects/Heading";

import projects from "@/data/content/projects";
import { allKebabTags, allTags } from "@/data/content/projects";
import { kebabCase, kebabArray } from "@/utils/utils";

type TagPageProps = {
  filteredProjects: typeof projects;
  tag: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tagSet = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tagSet.add(tag));
  });

  const paths = Array.from(tagSet).map((tag) => ({
    params: { tag: kebabCase(tag) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<TagPageProps> = async ({
  params,
}) => {
  const tagParam = params?.tag as string;

  const filteredProjects = projects.filter((project) =>
    kebabArray(project.tags).includes(tagParam)
  );

  return {
    props: {
      filteredProjects,
      tag: tagParam,
    },
  };
};

export default function TagPage({ filteredProjects, tag }: TagPageProps) {
  const tagIndex = allKebabTags.indexOf(tag);
  const capitalizedTag = tagIndex !== -1 ? allTags[tagIndex] : tag;

  return (
    <Page
      currentPage="Projects"
      meta={{
        title: `${capitalizedTag} Projects`,
        desc: `A showcase of all ${capitalizedTag} projects.`,
      }}
    >
      <Heading tag={capitalizedTag} />
      <Projects overwriteProjects={filteredProjects} />

      <Link href="/projects" passHref>
        <a className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
          View All
        </a>
      </Link>
    </Page>
  );
}
