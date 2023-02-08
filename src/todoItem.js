// At a minimum they should have a title, description, 
// dueDate and priority. You might also want to 
// include notes or even a checklist
import { format } from 'date-fns'



class TodoItem {

    title = 'Task Title';

    description = 'Task Description';

    dueDate = format(new Date(), 'MM/dd/yyyy');

    priority = 'HIGH';

    notes = '';

    completed = false;

    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.completed = false;
    }
}


export default TodoItem;