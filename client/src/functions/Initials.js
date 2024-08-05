const Initials = (name) => {
    const names = name.split(" ");
    const first = names[0].charAt(0).toUpperCase();
    const last = names[names.length - 1].charAt(0).toUpperCase();
  
    return first + last;
  };

  export default Initials;