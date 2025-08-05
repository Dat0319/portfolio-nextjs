import SectionTitle from '@/components/common/SectionTitle';
import ConstrainedBox from '@/components/core/constrained-box';
import ResponsiveBox from '@/components/core/ResponsiveBox';
import projects from '@/data/projects';
import ProjectList from './ui/ProjectList';

const HomeSection5 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Recent Works</SectionTitle>

        <ProjectList projects={projects} />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection5;
