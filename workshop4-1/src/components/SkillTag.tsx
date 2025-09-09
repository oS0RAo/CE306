import React from 'react';
import './SkillTag.css';

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

interface SkillTagProps {
  skill: {
    name: string;
    level?: SkillLevel;
  };
}

const getLevelClass = (level: SkillLevel | undefined) => {
  switch (level) {
    case "Beginner":
      return "beginner";
    case "Intermediate":
      return "intermediate";
    case "Advanced":
      return "advanced";
    default:
      return "";
  }
};

export const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  return (
    <span className={`skill-tag ${getLevelClass(skill.level)}`}>
      <span className="skill-tag-name">{skill.name}</span>
      {skill.level && (
        <span className="skill-tag-level">({skill.level})</span>
      )}
    </span>
  );
};