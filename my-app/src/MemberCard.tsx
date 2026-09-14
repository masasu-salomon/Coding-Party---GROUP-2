// Author: Victor
// Task 11: Define an interface for MemberCard props with name and role properties
// Task 14: Add a numeric prop called tasksCompleted
// Task 15: Add a boolean prop called isActive
// Task 17: Add an optional bio prop using the ? modifier
import "./MemberCard.css";

interface MemberCardProps {
  name: string;
  role: string;
  tasksCompleted: number;
  isActive: boolean;
  bio?: string; // Task 17: Optional prop using ? modifier
}

// Task 12: Display the name and role values inside MemberCard
// Task 19: Provide a default value for one prop using a default function parameter
function MemberCard({ name, role, tasksCompleted = 0, isActive, bio }: MemberCardProps) {
  return (
    <article className={`member-card ${isActive ? "active" : "inactive"}`}>
      <h2 className="member-name">{name}</h2>
      <p className="member-role">Role: {role}</p>
      <p>Tasks Completed: {tasksCompleted}</p>
      {/* Task 16: Display Active or Inactive based on the value of isActive */}
      <p className={`member-status ${isActive ? "active" : "inactive"}`}>
        Status: {isActive ? "Active" : "Inactive"}
      </p>
      {/* Task 18: Display the bio only when one is provided */}
      {bio && <p className="member-bio">Bio: {bio}</p>}
    </article>
  );
}

export default MemberCard;
