import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';




const fetchFonts = () => {
  return Font.loadAsync({
    'Montserrat':require('./assets/Fonts/MontserratAlternates-Light.ttf')
  });
};







export default function App() {
  const[load,setLoad]=useState(false)
  const[numbers,setNumbers]=useState("")
  const[result,setResult]=useState("")

  if(!load){
    return(
    <AppLoading 
      startAsync={fetchFonts}
      onFinish={()=>setLoad(true)}
    />
    )
  }

 
  function handleClick(item){
    if(typeof item == 'number'){
      let string=numbers;
      
      let array=string.split("")
      array.push(item)
      let newArray=array.join('').toString()
      
      setNumbers(newArray)
      setResult("")


    }else{
      let string=numbers;    
      let array=string.split("")
      let tamanho= string.length 
      let ant = tamanho-1;
      if(array[ant]=='+' || array[ant] == '-' || array[ant] == '*'||array[ant]=='/' || array[ant] == '.'){
        
        array.pop()
        let newArray=array.join('').toString()
        setNumbers(newArray)
      }else{     
        array.push(item.toString())
        let newArray=array.join('').toString()
        
        setNumbers(newArray)
        setResult("")
      
      }
     
    }
     
  }
  function Del(){
    let string=numbers;
     
    let array=string.split("")
    array.pop()
    let newArray=array.join('').toString()
     
    setNumbers(newArray)
  }
  function Del2(){
    
    setResult('')
    setNumbers('')
  }



  function Conta(){
    let x=eval(numbers)
    setResult(x)
    setNumbers('')


  }










  return (
    <>
      <View style={styles.container}>
          <View style={styles.container__box}>
            
              <Text style={{fontSize:30,fontFamily:'Montserrat', color:'#E7ECEF'}}>{numbers}</Text>
              <Text style={{fontSize:30,fontFamily:'Montserrat', color:'#0F7173'}}>{result}</Text>
            
  
              
          </View>
          <View style={styles.container__numb}

          >
            <View style={styles.container__numbox}>
            <TouchableOpacity style={styles.card}onPress={()=>{
              handleClick(1)
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>1 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}onPress={()=>{
              handleClick(2)
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}onPress={()=>{
              handleClick(3)
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>3</Text>
            </TouchableOpacity>


           
            <TouchableOpacity style={styles.card} onPress={()=>{Del()}} onLongPress={()=>{Del2()}}>
            
            <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>Del</Text>
          </TouchableOpacity>



            <TouchableOpacity style={styles.card}onPress={()=>{
              handleClick(4)
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}onPress={()=>{
              handleClick(5)
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}onPress={()=>{
              handleClick(6)
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>6</Text>
            </TouchableOpacity>

            
             <TouchableOpacity style={styles.card}onPress={()=>{
              handleClick('+')
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}onPress={()=>{
              handleClick(7)
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={()=>{
              handleClick(8)
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}onPress={()=>{
              handleClick(9)
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>9</Text>
            </TouchableOpacity>

           
            <TouchableOpacity style={styles.card}onPress={()=>{
              handleClick('-')
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={()=>{
              handleClick(0)
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'} }>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>{
              handleClick('.')
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'} }>.</Text>
            </TouchableOpacity>
            
            
            <TouchableOpacity style={styles.card}onPress={()=>{
              handleClick('/')
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>{
              handleClick('*')
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>{
              handleClick('(')
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>(</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>{
              handleClick(')')
            }}>
              <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>)</Text>
            </TouchableOpacity>
             
            
            
            <TouchableOpacity style={styles.card2} onPress={()=>{Conta()}}>
              
                <Text style={{fontSize:30,fontFamily:'Montserrat',color:'#E7ECEF'}}>OK</Text>
              
            </TouchableOpacity>
           
              
            </View>
          </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#272932'
  },
  container__box:{
    marginTop:50,
    padding:30,
    width:300,
    alignItems:'flex-start',
    marginHorizontal:20,
    borderLeftWidth:2,
    borderLeftColor:"#0F7173",
 
    
    
    
  },
  card:{
    width:70,
    height:70,
    borderRadius:15,
    margin:5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#272932',
  
    shadowColor: "#040412",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,


  },
  card2:{
    width:'80%',
    height:70,
    marginTop:30,
    alignItems:'center',
    backgroundColor:'#0F7173',
    borderRadius:15,
    shadowColor: "#0F7173",
    justifyContent:'center',
shadowOffset: {
	width: 2,
	height: 2,
},

elevation: 1,
    
  },






  
  lg:{
    fontSize:35
    
  },
  container__numb:{
    flex:1,    
    
    justifyContent:'center',
    alignItems:'center'   
  },
  container__numbox:{
    width:350,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
  
  }
});
