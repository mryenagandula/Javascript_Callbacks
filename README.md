# Javascript Callbacks | Koseksi 

### Callbacks In Detail
- Normally in javascript functions called as call back. 
- A function accepting parameter as function is also called callback.

### Steps:
- Create function in javascript file and pass as argument in another function.

### Example (1)
```bash
  function task(taskStatus) {
    console.log('task()')
    console.log('task-- started');
    console.log('task-- completed');
    taskStatus('task completed');
    }

    task((status) => {
        console.log('callback',status);
    })
```