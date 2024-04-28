const MembersList = ({ members }) => {
  return (
    <div className="ml-5 overflow-auto">
      {members.map((member) => {
        return (
          <p className="text-text-dark my-2 text-lg text-start">
            {member.fullName}
          </p>
        );
      })}
    </div>
  );
};

export default MembersList;
