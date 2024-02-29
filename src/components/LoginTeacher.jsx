import React, { useState } from 'react'
import styled , {keyframes}from 'styled-components'


const Moving = keyframes`
0%{
 opacity:0;
}
95%{
    opacity:1;
}
`;

const BackgroundBox=styled.div`
   background-color:rgb(101, 114, 190);
   height:60vh;
   width:120vh;

   display:flex;
   justify-content:center;
   align-items:center;
   margin:15rem auto;
   position:relative;
   border-radius:25px;

   .text1{
    z-index:${(props)=>props.clicked?"-700":"700"};
    transform:${(props)=>props.clicked?"translteX(0)":"translateX(100%)"};
    transition:transform 0.8s ease-in-out;
    animation:${props=>props.clicked?Moving:"none"} 1.5s;
   }

   .text2{
    z-index:${(props)=>props.clicked?"700":"-700"};
    transform:${(props)=>props.clicked?"translateX(-100%)":"translateX(0)"};
    transition:transform 0.8s ease-in-out;
    animation:${props=>props.clicked?"none":Moving} 1.5s;
   }

   .signIn{
    position:absolute;
    top:0%;
    text-align:center;
     z-index:${props=>props.clicked?"-600":"500"};
     transform:${props=>props.clicked?"none":"translateX(-50%)"};
     transition:all 1s;
   }

   .signUp {
    position:absolute;
    top:0%;
    text-align:center;
     z-index:${props=>props.clicked?"500":"-500"};
     transform:${props=>props.clicked?"translateX(32%)":"none"};
     transition:all 1s;
   }
   .userInfo{
    font-size:25px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    gap:15px;
   }

   .userType{
    font-size:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    gap:15px;
   }

   .userMajor{
    display:inline-flex;
    overflow:hidden;
    border-radius:15px;
    box-shadow:0 0 5px black;
   }
   .radioInput{
     display:none;
   }
   .radioLablel{
    padding:10px 30px;
    font-size:25px;
    text-algin:center;
    cursor:pointer;
    transition:background 0.1s;
   }
   .radioLablel:not(:last-of-type){
    border-right:1px solid black;
   }
   .radioInput:checked + .radioLablel{
    background-color:#053271;
   }

.firstTwoField ,.secondTwoField,.thirdTwoField,.fourthTwoField{
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:6px;
    text-align:center;
}
}

.userReg{
    display:flex;
    flex-direction:column;
    gap:6px;
    margin-bottom:20px;
}
   
.titlePage{
   position:relative;
   font-size:60px;
   right:5px;
   margin-bottom:7rem;
   margin-left:5rem;
}
.HDR{
    font-size:20px;
}

.gender{
    font-size:8rem;
}
.txtField{
    text-align:center;
}

`;
const FirstBox =styled.div`
  background-color:#f1fdcd;
  width:50%;
  height:100%;
  position:absolute;
  top:0;
  left:0;

  transform :${(props)=>props.clicked? 
            "translateX(90%)":"translateX(10%)"};
  transition:transform 1s;

  &::after , &::before{
    content:"";
    position:absolute;
    width:100%;
    height:100%;
    background-color:#f1fdcd;
  }

  &::before{
    top:3rem;
    border-radius:25px;
  }

  &::after{
    bottom:3rem;
    border-radius:25px;

  }
`;
const SecondBox =styled.div`

  background-color:#053271;
  width:45%;
  height:100%;
  position:absolute;
  right: 0;
  top: 0;
  z-index:600;

  transform :${(props)=>props.clicked? 
    "translateX(-122%)":"translateX(0%)"};
 transition : transform 1s;

  border-radius:${(props)=>props.clicked?"25px 0 0 25px":" 0 25px 25px 0"};
`;
const Form = styled.form`
  color:#1b1b1b;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height:100%;
  padding:0 4rem;
`;
const Input = styled.input`
 background-color:#fff;
 border-bottom:5px solid #053271;
 padding:1rem 2rem;
 margin:1rem 0;
 font-size:20px;
 width:100%;

 &:focus{
   outline:none;
   border:none;

 }
`;
const InputSignup = styled.input`
 background-color:#fff;
 border-bottom:5px solid #053271;
 padding:0.5rem 1rem;
 
 font-size:15px;
 &:focus{
   outline:none;
   border:none;
 }
 `;
const Button = styled.button`
 border-radius:4px;
 padding:1rem 3.5rem;
 font-size:25px;
 margin-top:1rem;
 border:2px solid black;
 color:#FFF;
 background-color:black;
 cursor:pointer;
 box-shadow:0 5px #999;

 &:hover{
    background-color:#1b1b1b;
 }
 &:active{
    background-color:black;
    box-shadow:0 5px #666;
    transform:translateY(4px);
 }

 &:focus{
    outline:none;

 }

`;
const Title = styled.h1`
 font-size:30px;
 margin-bottom:2rem;
`;
const Link = styled.a`
 text-decoration:none;
 color:#333;
 font-size:1.5rem;
 margin:1rem 0;
`;
const AnimationButton = styled.button`
 position:absolute;
 z-index:1000;
 width:5rem;
 height:5rem;
 top :70%;
 border:none;
 cursor:pointer;
 right:${props=>props.clicked?"52%":"42%"};
 transform:${props=>props.clicked?"rotate(360deg)":"rotate(0)"};
 transition: all 1.5s;
 background-color: transparent;
 &::before{
    content:"📖";
    font-size:4rem;
 }
 &:focus{
    outline:none;
 }
 

`;
const Text = styled.div`
position:absolute;
 z-index:1000;
 display:flex;
 flex-direction:column;
 color:black;

 .attention{
    font-size:2.5rem;
    position:relative;
 }
 .attention-icon{
    position:absolute;
    right:${props=>props.clicked?"0":"none"};
    top:100%;
    font-size:5rem;
 }
`;
function LoginSignUp() {
    const [click,setClick]=useState(false);
    const handleClick =()=>{
      setClick(!click)
    }
  return (
    <>
    
      <BackgroundBox clicked={click}>
      <AnimationButton clicked={click}   onClick={handleClick}></AnimationButton>
       <Form className='signIn'>
        <Title>تسجيل دخول المدرس </Title>
         <Input className='txtField' type="text" name="teacherId" id="teacherId" 
          placeholder='رقم الهوية'
         />
         <Input className='txtField' type="password" name="password" id="passwordId" 
          placeholder='كلمة السر'
         />
         <Link href="#">هل نسيت كلمة السر ؟ </Link>
         <Button>  تسجيل الدخول</Button>
       </Form>

       <Text className='text1' clicked={click}>
        <h1 className='titlePage'>
       تفوَّق 🎓
        </h1>
        <br/>
       </Text>

       <Text className='text2' clicked={click}>
        <h1 className='titlePage'>
       تفوَّق 🎓
        </h1>
        <h4 className='HDR'>
         لتسجيل الدخول  
        </h4>
        <br/>
        <span className='attention'>اضغط على الكتاب</span>
        <span className='attention-icon'>⤷</span>
       </Text>

        <FirstBox clicked={click} />
        <SecondBox clicked={click} />
      </BackgroundBox>
    </>
  )
}

export default LoginSignUp
