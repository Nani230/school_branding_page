import{r as s,a3 as u,j as e,L as p}from"./index-YktDhaLf.js";const f=()=>{const[c,n]=s.useState(!1),[r,i]=s.useState(""),[l,o]=s.useState(""),m=u(),d=["/","register","contact"];s.useEffect(()=>{const t=setTimeout(()=>n(!0),100);return()=>clearTimeout(t)},[]);const x=t=>{t.preventDefault();const a=r.toLowerCase();d.includes(a)?(o(""),m(`${a}`)):o(`This ${a} page is not available.`)};return e.jsxs("div",{className:"relative flex items-center justify-center min-h-screen sm:items-start sm:-mt-10",children:[e.jsxs("div",{className:"absolute top-0 left-0 w-full h-full",children:[e.jsx("div",{className:"absolute  sm:top-1/4 sm:left-1/3 w-[300px] h-[300px] bg-secondary rounded-full opacity-20 blur-3xl"}),e.jsx("div",{className:"absolute sm:bottom-1/4 sm:right-1/3 w-[300px] h-[300px] bg-primary rounded-full opacity-20 blur-3xl"})]}),e.jsxs("div",{className:`relative z-10 flex flex-col items-center   text-center transition-all duration-1000 transform ${c?"scale-100 opacity-100":"scale-75 opacity-0"}`,children:[e.jsxs("div",{className:"flex items-center justify-center gap-6",children:[e.jsx("h1",{className:"text-primary text-[5rem] sm:text-[12rem] md:text-[15rem] font-extrabold",children:"4"}),e.jsx("img",{src:"https://cdn.pixabay.com/photo/2018/03/24/09/19/robot-3256109_960_720.png",alt:"Robot Illustration",className:"w-40 ml-8 md:w-52 animate-float"}),e.jsx("h1",{className:"text-primary text-[5rem] sm:text-[12rem] md:text-[15rem] font-extrabold",children:"4"})]}),e.jsx("h2",{className:"text-3xl font-bold pt sm:-mt-5 md:text-4xl text-primary",children:"Oops! You seem lost."}),e.jsx("p",{className:"mt-3 text-lg md:text-xl text-[#606F7B]",children:"The page you’re looking for can’t be found. Let’s help you get back on track."}),e.jsxs("div",{className:"mt-5",children:[e.jsxs("form",{onSubmit:x,className:"flex justify-center",children:[e.jsx("input",{type:"text",placeholder:"Search for a page...",value:r,onChange:t=>i(t.target.value),className:"w-48 px-4 py-2 border-2 rounded-lg sm:w-64 border-secondary"}),e.jsx("button",{type:"submit",className:"px-6 py-2 ml-2 text-white transition-all duration-300 rounded-lg bg-primary hover:bg-secondary",children:"Search"})]}),l&&e.jsx("p",{className:"mt-2 text-red-500",children:l})]}),e.jsx("div",{className:"mt-8",children:e.jsx(p,{to:"/",className:"px-6 py-3 text-lg font-semibold text-white transition-transform duration-300 rounded-lg shadow-lg md:px-8 md:py-4 bg-primary hover:bg-secondary hover:scale-105",children:"Go Back Home"})})]})]})};export{f as default};
