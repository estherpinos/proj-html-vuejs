import { reactive } from 'vue';

// le proprietà dello'oggetto reactive sono proprità reattive 
export const store = reactive({

 menuHeader:[
  'home',
  'pages',
  'portfolio',
  'blog',
  'shop',
  'elements'
 ],


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

 blog:[

  {
    src:'h-2-blog-img-1.jpg',
    text: 'This way, loves: a detailed guide throught new design',
    name:'By Emily Fields'
  },
  {
    src:'h-2-blog-img-2.jpg',
    text: 'I try to give people a different way of looking art',
    name:'By Emily Fields'
  },
  {
    src:'h-2-blog-img-3.jpg',
    text: 'introduce Richard Laperrière of those amazinf feautures',
    name:'By Emily Fields'
  }

 ]




})

