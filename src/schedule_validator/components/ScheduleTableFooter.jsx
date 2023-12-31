import { useEffect, useState } from "react";

const ScheduleTableFooter = ({ term, schedule }) => {
	const [credits, setCredits] = useState(0);

    useEffect(() => {
        let newCredits = 0
        const termIndex = schedule.terms.findIndex(x => x.id === term.id);
        schedule.terms[termIndex].courses.forEach(course => newCredits+=course.credits)
        setCredits(newCredits)
    }, [schedule])

	return (
		<tr className="schedule-table-footer">
			<td colSpan={2}>Total Credits: {credits}</td>
		</tr>
	);
};
export default ScheduleTableFooter;
