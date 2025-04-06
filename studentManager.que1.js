function createStudentManager(){
    const students={}
    function addStudent(id,name){
        if(!students[id]){
            students[id]={name,scores:{}};
        }
    }
    function updateScore(id,subject,score){
        if(students[id]){
            students[id].scores[subject]=score;
        }
    }
    function getStudentDetails(id){
        return students[id]||null;
    }
    function addSubject(id,subject,score){
        updateScore(id,subject,score);
    }
    function calculateAverage(scores){
        const values=Object.values(scores)
        const total=values.reduce((sum,scores)=>sum+scores,0);
        return values.length ?total/values.length : 0;

    }
    function alltotal(){
        const studentsAverage={}
        const topPerformers=[]
        const failedStudent=[]
        const subjectScores={}
        const subjectFrequency={};
        Object.entries(students).forEach(([id,student])=>{
            const avg=calculateAverage(student.score)
            studentsAverage[id]=avg
        if(avg > 85)topPerformers.push(student.name);
        if(Object.values(student.score).some(score=>score <35)){
            failedStudent.push(student.name)
            }
            Object.entries(student.score).forEach(([subject,score])=>{
                if(!subjectScores[subject])subjectScores[subject]=[];
                 subjectScores[subject].push(score)
                 subjectFrequency[subject]=(subjectFrequency[subject]||0)+1;
            })
        })
        const difficultsubjects=Object.entries(subjectScores)
       .filter(([_,scores])=>scores.filter(s =>s<40).length/scores.length >0.5)
       .map(([subject])=>subject);
       return{
        studentsAverage,
        topPerformers,
        failedStudent,
        difficultsubjects,
        subjectFrequency
       }
    }
    function getSortedStudent(sortBy="name"){
        const list =Object.entries(students).map(([id,student])=>({
            id,
            name:student.name,
            averageScore:calculateAverage(student.score)
        }));
        if(sortBy ==="averageScore"){
            return list.sort((a,b)=>b.averageScore - a.averageScore);
        }
        return list.sort((a,b)=>a.name.localeCompare(b.name))
    }
    return {
        addStudent,
        updateScore,
        getStudentDetails,
        addSubject,
        alltotal,
        getSortedStudent
    }
}
   const manageer=createStudentManager()

   manageer.addStudent("inter1","pavan")
   manageer.addSubject("inter1","maths",93)
   manageer.addSubject("inter1","English",76);

   manageer.addStudent("inter2","gooki")
   manageer.addSubject("inter2","maths",56)
   manageer.addSubject("inter2","English",26);

   manageer.addStudent("inter3","ravi")
   manageer.addSubject("inter3","maths",60)
   manageer.addSubject("inter3","English",86);

   console.log(manageer.getStudentDetails("inter2"))
   console.log(manageer.alltotal())
   console.log(manageer.getSortedStudent("averagerScores"))