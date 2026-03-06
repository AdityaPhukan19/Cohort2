const users = [
  {
    fullname: "Riya Sharma",
    image: "https://images.unsplash.com/photo-1772757844633-0f1e20b8a199?q=80&w=396&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Frontend Developer",
    description: "Passionate about building responsive and user-friendly web interfaces using modern JavaScript frameworks.",
    tags: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    fullname: "Aman Verma",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Backend Developer",
    description: "Experienced in building scalable APIs and server-side applications.",
    tags: ["Node.js", "Express", "MongoDB", "API"]
  },
  {
    fullname: "Sneha Patel",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "UI/UX Designer",
    description: "Designs clean and intuitive user experiences for web and mobile applications.",
    tags: ["Figma", "UI Design", "UX Research", "Prototyping"]
  },
  {
    fullname: "Rahul Mehta",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Full Stack Developer",
    description: "Works on both frontend and backend to build complete web applications.",
    tags: ["React", "Node.js", "MongoDB", "Express"]
  }
]
var sum=''
users.forEach(function(elem){
     sum =sum+`<div class="card">
        <img src="${elem.image}">
        <h3>${elem.fullname}</h3>
        <h4>${elem.profession}</h4>
        <p>${elem.description}</p>
       </div>`
})

var main=document.querySelector('main')

main.innerHTML=sum




