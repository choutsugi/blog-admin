import { defineStore } from 'pinia';

const useCountStore = defineStore({
  id: 'count',
  state: () => ({ num: 1 }),
  actions: {
    increment() {
      this.num += 1;
    },
  },
});

const instance = useCountStore();

//保存到缓存
instance.$subscribe((_, state) => {
  localStorage.setItem('count-store', JSON.stringify({ ...state }));
});

//刷新页面状态不丢失
const old = localStorage.getItem('count-store');
if (old) {
  instance.$state = JSON.parse(old);
}

export default useCountStore;
