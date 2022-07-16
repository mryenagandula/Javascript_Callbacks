alert('Hello world !!!');

/** Example 01 starting */
function task(taskStatus) {
    console.log('task()')
    console.log('task-- started');
    console.log('task-- completed');
    taskStatus('task completed');
}

task((status) => {
    console.log('callback',status);
})

/** Example 01 Ending */

