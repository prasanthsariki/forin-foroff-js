let student = [
    { id: 1, s_name: "Pavan", city: "Hyd" },
    { id: 2, s_name: "Arjun", city: "Sec" },
    { id: 3, s_name: "Meena", city: "Vizag" },
    { id: 4, s_name: "Rahul", city: "Bng" },
    { id: 5, s_name: "Seeta", city: "Mum" },
    { id: 6, s_name: "Vijay", city: "Chennai" }
  ];
  console.log("           using for in")
for (let i in student) {
    
    console.log(`${student[i].s_name} from ${student[i].city}`);
}  

console.log("             using for off")
for (let i of student) {
    
    console.log(`${i.s_name} from ${i.city}`);
  }
  