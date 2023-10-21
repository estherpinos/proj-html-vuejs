import { reactive } from 'vue';

// le proprietà dello'oggetto reactive sono proprità reattive 
export const store = reactive({
 images:[

  {
    src:'h-2-port-img-1.jpg'
  },
  {
    src:'h-2-port-img-2.jpg'
  },
  {
    src:'h-2-port-img-3.jpg'
  },
  {
    src:'h-2-port-img-4.jpg'
  },
  {
    src:'h-2-port-img-5.jpg'
  },
  {
    src:'h-2-port-img-6.jpg'
  }
 ],

 working:[

  {
    src:'fa-solid fa-lightbulb fa-2x ',
    title:'First theres an idea',
    text:'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.',
    

  },
  {
    src:'fa-regular fa-comment fa-2x',
    title:'Then we talk about',
    text:'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.',
    
  },
  {
    src:'fa-solid fa-cloud fa-2x',
    title:'And we think about',
    text:'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.',
    
  },
  {
    src:' fa-solid fa-pencil fa-2x',
    title:'So we draw along',
    text:'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.',
   
  }
 ]





})

