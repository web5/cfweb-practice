import { debounce, throttle} from '../src/utils';
// 测试
function task(a: any){
  console.log('run task', a);
}
const debounceTask = debounce(task, 1000);
const throttleTask = throttle(task, 200);

debounceTask(1);

throttleTask(1);

// export default {}
