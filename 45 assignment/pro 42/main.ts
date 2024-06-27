function show_magician(magicians: string[]) {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  function make_great(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
  }
  let magician_name: string[] = ["sara", "maria", "georgie", "john"];
  magician_name = make_great(magician_name);
  show_magician(magician_name)