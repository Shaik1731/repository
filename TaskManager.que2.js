const TaskManger=(function(){
    let tasks=[]
    let taskId=101;
    return {
        addTask(title){
            tasks.push({id:taskId++,title,completed:false});
        },
        getAllTasks(){
           return JSON.stringify(tasks,null,2);

        },
        markCompleted(taskId){
            tasks=tasks.map(task=>task.id===taskId ?{...task,completed:true}:task);
        },
        removeTask(taskId){
            tasks=tasks.filter(task=>task.id !== taskId);
        },
        getPendingTasks(){
            return tasks.filter(task => !task.completed)
                      .map((task)=>({...task}))
        },
        getCompletedTasks(){
            return tasks.filter(task=>task.completed).map(task=>task.taskId)
        },
        sortTasks(){
            return tasks
             .sort((a,b)=>a.title.localeCompare(b.title))
             .map(task=>task.title)
        }
    };
})();
  TaskManger.addTask("cricket")
  TaskManger.addTask("cooking")
  TaskManger.addTask("Watching tennis")
  TaskManger.markCompleted(2)
  console.log("All tasks",TaskManger.getAllTasks())
  console.log("pending task",TaskManger.getPendingTasks())
  console.log("soreted tasks",TaskManger.sortTasks())
  console.log("completed tasks",TaskManger.getCompletedTasks())
  