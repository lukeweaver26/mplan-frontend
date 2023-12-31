import RequirementGroup from "./RequirementGroup";

const Report = ({ report }) => {
	return (
			<div className="report">
				{Object.keys(report).length !== 0 ? (
					<>
						{report.requirement_groups.map((group) => {
							return <RequirementGroup key={group.name} group={group} />;
						})}
					</>
				) : (
					<div></div>
				)}
			</div>
	
	);
};
export default Report;
