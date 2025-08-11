import BulletedText from '@/components/common/bulleted-text';
import Column from '@/components/core/Column';
import type { IExperienceItem } from '@/types';

const ExperienceItem = ({ data }: { data: IExperienceItem }) => {
  return (
    <Column classNames="justify-between w-full h-full gap-2">
      <Column classNames="justify-start">
        <p className="text-lg/6 font-semibold">{data.designation}</p>

        <a
          target="_blank"
          href={data.company_link}
          className="text-[var(--textColorLight)] text-base/6 font-medium"
        >
          @{data.company}
        </a>
      </Column>

      <div className="w-full flex flex-col gap-2 relative mt-0 md:mt-8">
        <p className="mb-2">
          <b>{`${data.isCurrentJob ? 'Present ' : ''}Technologies`}: </b>
          {data.tech}
        </p>
        {data.description.map((desc, i) => {
          return (
            <BulletedText key={`exp-desc-${i}`}>
              <p className="text-base/6 font-normal whitespace-pre-wrap">
                {desc}
              </p>
            </BulletedText>
          );
        })}
      </div>
    </Column>
  );
};

export default ExperienceItem;
