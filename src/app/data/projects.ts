import { features } from "process";

export interface Project {
  title: string;
  slug: string;
  image: string;
  description: string;
  skills: string[];
  category: string;
  year: number;
  keyFeatures: string[];
}

export const PROJECTS: Project[] = [
  {
    title: 'Mindful Meds',
    slug: 'mindful-meds',
    image: '/image-placeholder.png',
    description: 'Designed UI for a medication reminder and wellness application focused on improving accessibility, usability, and user engagement for medication management.',
    skills: ['UX Design', 'Usability Heuristics', 'User-Centered Design'],
    category: 'Frontend',
    year: 2026,
    keyFeatures: [
      'Applied usability heuristics to refine workflows and reduce user confusion',
      'Iterative testing to identify and resolve usability issues',
      'Collaborated on feature planning and interface evaluation',
      'Focused on accessibility and engagement for medication management',
    ],
  },
  {
    title: 'GridPath Navigator',
    slug: 'gridpath-navigator',
    image: '/image-placeholder.png',
    description: 'Developed and compared two search-based agents for navigating 2D environments with walls and movement constraints to efficiently reach target locations.',
    skills: ['Java', 'Pathfinding', 'Search Algorithms', 'AI'],
    category: 'AI',
    year: 2026,
    keyFeatures: [
      'Implemented pathfinding using search trees and heuristic-based decision making',
      'Tested across environments with varying sizes, layouts, and time-step constraints',
      'Compared two distinct agent strategies for traversal efficiency',
      'Visualized agent performance using simulation tools',
    ],
  },
  {
    title: 'OptiTask Configuration Solver',
    slug: 'optitask-configuration-solver',
    image: '/image-placeholder.png',
    description: 'Developed and compared two search-based optimization agents that assigned workers to tasks to maximize overall system efficiency.',
    skills: ['Java', 'Search Trees', 'Optimization', 'AI'],
    category: 'AI',
    year: 2026,
    keyFeatures: [
      'Search tree and configuration evaluation logic for task allocation',
      'Analyzed performance over 1,000 simulation iterations',
      'Optimized worker-task assignments under runtime constraints',
      'Used visualization and automated simulation tools for analysis',
    ],
  },
  {
    title: 'Connect Four Adversarial AI',
    slug: 'connect-four-adversarial-ai',
    image: '/image-placeholder.png',
    description: 'Developed and compared two adversarial AI agents for Connect Four using strategic decision-making and game tree search techniques.',
    skills: ['Java', 'Game Trees', 'AI', 'Adversarial Search'],
    category: 'AI',
    year: 2026,
    keyFeatures: [
      'Move evaluation and opponent prediction logic',
      'Game tree search for strategic decision-making',
      'Tested under strict runtime limits through large-scale simulation matches',
      'Compared win rates against heuristic and randomized opponents',
    ],
  },
  {
    title: 'ChipQuest Planning Agent',
    slug: 'chipquest-planning-agent',
    image: '/image-placeholder.png',
    description: 'Developed an AI planning agent capable of navigating puzzle-based environments to collect chips, keys, and unlock doors before reaching goal states.',
    skills: ['Java', 'Path Planning', 'Search', 'AI'],
    category: 'AI',
    year: 2026,
    keyFeatures: [
      'Search and path planning for puzzle environment navigation',
      'Priority-based decision logic for resource collection',
      'Solved increasingly complex maps inspired by Chip\'s Challenge',
      'Optimized traversal and resource collection strategies',
    ],
  },
  {
    title: 'BattleZone',
    slug: 'battlezone',
    image: '/image-placeholder.png',
    description: 'Developed a 3D Battlezone-inspired tank game in Godot featuring progressive multi-level difficulty and enemy AI with randomized respawn logic.',
    skills: ['Godot', 'Game Design', 'AI', '3D'],
    category: 'Games',
    year: 2025,
    keyFeatures: [
      'Progressive multi-level difficulty system',
      'Enemy AI with randomized respawn logic',
      '3D environment built in Godot',
    ],
  },
  {
    title: 'WolfCafe',
    slug: 'wolfcafe',
    image: '/image-placeholder.png',
    description: 'Developed a full-stack web portal with a team supporting multi-role access and workflows including item/recipe management, inventory updates, ordering, and fulfillment.',
    skills: ['Java', 'React', 'HTML', 'CSS', 'Bootstrap', 'RESTful APIs', 'Node.js', 'Spring'],
    category: 'Fullstack',
    year: 2025,
    keyFeatures: [
      'Multi-role access with distinct workflows per user type',
      'Responsive front-end UI with React, HTML, CSS, and Bootstrap',
      'RESTful API integration with JSON-based data flows',
      'Backend services built with Node.js and Spring',
    ],
  },
  {
    title: 'Stranger Danger',
    slug: 'stranger-danger',
    image: '/image-placeholder.png',
    description: 'Composed a serious game aimed at teaching children city safety rules by building critical thinking skills for real-world decision making.',
    skills: ['Godot', 'Game Design', 'Serious Games'],
    category: 'Games',
    year: 2025,
    keyFeatures: [
      'Top-down city game with progressive difficulty per level',
      'Each level simulates a child\'s route home from school',
      'Focused on teaching critical thinking for safety decisions',
      'Designed as a serious game for educational impact',
    ],
  },
  {
    title: 'Go',
    slug: 'go-mobile-game',
    image: '/image-placeholder.png',
    description: 'Created a mobile game using Android Studio that implements the rules of Go, including stone placement, turn-taking, and capture logic with a clean XML-based UI.',
    skills: ['Java', 'Android Studio', 'XML', 'Mobile'],
    category: 'Games',
    year: 2025,
    keyFeatures: [
      'Full Go rules including stone placement, turn-taking, and capture logic',
      'Mobile UI designed with XML layouts for clarity and responsiveness',
      'Clean separation of UI and game logic for maintainability',
    ],
  },
  {
    title: 'TrailManager',
    slug: 'trailmanager',
    image: '/image-placeholder.png',
    description: 'Developed a pathfinding system with a partner leveraging SkipListMap, SinglyLinkedList, and MergeSorter for efficient landmark and distance management.',
    skills: ['Java', 'Data Structures', 'Algorithms', 'Eclipse'],
    category: 'Fullstack',
    year: 2025,
    keyFeatures: [
      'SkipListMap, SinglyLinkedList, and MergeSorter for data handling',
      'Landmark management and distance computation',
      'Input file handling with reliable navigation logic',
      'Designed for extensibility and future updates',
    ],
  },
  {
    title: 'PackScheduler',
    slug: 'packscheduler',
    image: '/image-placeholder.png',
    description: 'Developed a course registration system simulation with a team using custom data structures, abstract classes, interfaces, and a provided GUI.',
    skills: ['Java', 'Jenkins', 'GitHub', 'Unit Testing', 'Eclipse'],
    category: 'Fullstack',
    year: 2024,
    keyFeatures: [
      'Custom ArrayLists, LinkedLists, and exception handling',
      'Abstract classes and interfaces for extensible design',
      'Collaborated with a team using Jenkins and GitHub workflows',
      'Unit testing with ECLEmma for code coverage',
    ],
  },
  {
    title: 'WolfTracker',
    slug: 'wolftracker',
    image: '/image-placeholder.png',
    description: 'Developed a task tracking program with a partner utilizing the Model-View-Controller pattern with custom data structures and a provided GUI.',
    skills: ['Java', 'MVC', 'Jenkins', 'GitHub', 'Eclipse'],
    category: 'Fullstack',
    year: 2024,
    keyFeatures: [
      'Model-View-Controller architecture for clean separation of concerns',
      'Custom ArrayLists and LinkedLists with abstract class usage',
      'Tested with Jenkins, ECLEmma, and static analysis tools',
    ],
  },
];

export const PROJECT_CATEGORIES = ['All', 'Frontend', 'Fullstack', 'AI', 'Games'];