import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Right,FooterTab, Content,Item,Input,SearchBar,Tabs, Tab, CheckBox} from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default class Process1SendMoney extends Component {
  constructor(){
    super();
    this.state={
      check:true,
      checkic:true
    }
  }
  onePressed(){
   
    this.setState({check:!this.state.check, check1:false,check2 :false,});
  }
  twoPressed(){
    this.setState({check:false, check1:!this.state.check1,check2 :false,});
  }
  threePressed(){
    this.setState({check:false, check1:false,check2:!this.state.check2});
  }
  iconPressed(){
   
      alert('asdsa')
  
  }
  render() {
    return (
      <Container >
        <Header style={{ backgroundColor: "white" }}>
                <Left>
            <View style={{ justifyContent: "center"}}>
                <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.goBack()}}><Icons size={20}  name="chevron-left"></Icons></Button>
            </View>
            </Left>
           <Body  style={{justifyContent: "center" ,alignItems:"center",flex:4}}>
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Send Money</Text>
           </Body>
           <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
           <Text><Ic name="bell" size={20}></Ic></Text>

           <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
           <Ionicons name="md-menu" size={25}></Ionicons>
                   </TouchableOpacity>
           </Right>
      </Header>
        <Content > 
         
        <View style={{marginTop:'2%',height:40,marginBottom:'5%'}}>
        <Image style={{width:'95%',marginLeft:'2.5%'}}
          source={require('../Appointments/images/process1.png')} 
            />
        </View>
        <View style={{flex:1,flexDirection:'column'}}> 
         <View style={{marginLeft:'4%',marginRight:'4%',borderRadius:4,borderWidth:1,borderColor:'#EEEEEE',padding:'3%'}}>
            <Text style={{fontSize:18,color:'black',marginBottom:'3%'}}>
            Select account to receive money
            </Text>
            <View style={{height:47,flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center',marginBottom:'6%'}}>
               <View style={{flex:1,marginLeft:'-4%'}}><CheckBox style={site.check} checked={this.state.check}
             onPress={() =>this.onePressed()}/></View>
                
                <View style={{flex:1,marginLeft:'-2%'}}><Image style={{height:50,width:50}} source={require('../Appointments/images/Group2.png')} /></View>
                <View style={{flex:2,marginRight:'-7%'}}>
                  <Text style={{color:'black'}}>Harmony Account</Text>
                  <Text >JERRY NGUYEN</Text>
                </View>
                <View style={{flex:1,marginRight:'-8%',marginTop:'-7%',color:'lightgreen'}}><Text style={{fontSize:13,fontWeight:'bold',color:'#34c00b'}}>$ 1914.00</Text></View>
            </View>
            <View style={{height:47,flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center',marginBottom:'6%',marginBottom:'6%'}}>
               <View style={{flex:1,marginLeft:'-4%'}}><CheckBox style={site.check} checked={this.state.check1}
             onPress={() =>this.twoPressed()}/></View>
                
                <View style={{flex:1,marginLeft:'-8%'}}><Image fontSize={30} source={require('../Appointments/images/thevisaa.png')} /></View>
                <View style={{flex:2,marginLeft:'-3%'}}>
                  <Text style={{color:'black'}}>**** **** **** **** 1234</Text>
                  <Text style={{color:'black'}} >JERRY NGUYEN</Text>
                </View>
            </View>
            <View style={{height:47,flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center',marginBottom:'6%'}}>
               <View style={{flex:1,marginLeft:'-4%'}}><CheckBox style={site.check} checked={this.state.check2}
             onPress={() =>this.threePressed()}/></View>
                
                <View style={{flex:1,marginLeft:'-5%'}}><Image style={{height:50,width:50}} source={require('../Appointments/images/nganhang2.png')} /></View>
                <View style={{flex:2,marginLeft:'-5%'}}>
                  <Text style={{color:'black'}}>Bank America</Text>
                  <Text style={{color:'black'}}>**** **** **** **** 5565</Text>
                </View>
            </View>
             <View style={{paddingTop:'3%',height:47,flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center',marginBottom:'6%'}}>
                <View style={{flex:1}}>
                <Icon style={site.ic} name="md-add-circle" check={this.state.checkic} onPress={()=> this.iconPressed()} /></View>
                <View style={{flex:4,paddingTop:'2%'}}><Text style={{color:'black'}}>Add a bank account or card</Text></View>
             </View>
              </View> 
             
          </View>
        </Content>
        <View style={{marginBottom:10}}>

              <View style={site.view}>
                <Button  style={site.btn}
                
                ><Text style={site.btn1}
                onPress={()=>{this.props.navigation.navigate('Process2SendMoney')}}
                > Next </Text></Button> 
              </View>
              </View>
         
      </Container>
    );
  }
}
var site=StyleSheet.create({
    ic:{
      paddingTop:'8%',
        color:"#0764b0",
        marginLeft:'-2%',
        fontSize:38,
        flex:1
    },
    check:{
        borderRadius:30,
        height:32,
        width:32,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0.1,
        borderColor:'#498dc5',
      
    },
    btn:{
      backgroundColor:'#0764b0',
    width:'40%',
    
    borderRadius: 4,
    justifyContent: 'center',
      alignItems:'center'
    },
    btn1:{
       fontWeight:'700',
      color:'white',
      fontSize:16,
      },
      view:{
       justifyContent: 'center',alignItems:'center',flexDirection:'row'
   }
});