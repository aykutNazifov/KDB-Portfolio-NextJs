const teams = [
  { years: "2008–2012", team: "Genk" },
  { years: "2012–2014", team: "Chelse" },
  { years: "2014–2015", team: "VfL Wolfsburg" },
  { years: "2015–", team: "Manchester City" },
];

const Teams = () => {
  return (
    <div className="flex flex-col w-full mt-[65px] md:px-20 text-center">
      <div className="flex w-full items-center justify-between mt-5">
        <span className="font-bold text-[26px]">Years</span>
        <span className="font-bold text-[26px]">Team</span>
      </div>

      {teams.map((team, i) => (
        <div key={i} className="flex w-full items-center justify-between mt-5">
          <span className="font-medium text-[20px]">{team.years}</span>
          <span className="font-medium text-[20px]">{team.team}</span>
        </div>
      ))}
    </div>
  );
};

export default Teams;
