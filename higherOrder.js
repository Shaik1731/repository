function taskMangementSystem(){
    let tasks=[];
    return {
        addTask:function(title){
            tasks.push({title:title,status:"pending"});
            return this
        },
        markTaskAsComplete:function(title){
            tasks=tasks.map(task =>{
                if(task.title===title){
                    task.status="completed";
                }
                return task;
            })
            return this 
        },
        filterTasks:function(status){
            tasks=tasks.filter(task => task.status===status);
            return this
        },
        listAllTasks:function(){
            tasks.forEach(task =>{
                console.log(`title: ${task.title},status:${task.status}`);
            })
            return this
        },
        sortTaskAlphabetically:function(){
            tasks.sort((a,b)=>a.title.localeCompare(b.title));
            return this;
        },
        countTasks:function(){
            const count = tasks.reduce((acc,task)=>{
                if(task.status =="completed"){
                    acc.completed ++
                }else{
                    acc.pending ++
                }
                return acc;
            },{completed:0,pending:0});
            console.log(`completed ${count.completed},pending ${count.pending}`)
            return this
        }

    }
}
   
const user=taskMangementSystem();
  user.addTask("adding a big task")
  user.addTask("another task is adding")
  user.markTaskAsComplete("completed tasks")
  user.filterTasks("pending")
  user.sortTaskAlphabetically()
  user.listAllTasks()
  user.countTasks()