import React, { Component } from "react";
import { Text, View, StyleSheet,TouchableOpacity,Image,ImageBackground} from "react-native";
import {
  Header, Content,Badge,Input,Item, Container, Form, Label,Button,Grid,Row,Left,Right,Body, Footer
} from "native-base";
import styles from "../../App/User/SignIn_SignUp/StyleSignInUp";
import Ic from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/FontAwesome";
const styleSUp = StyleSheet.create({
  Icon: {
    fontSize: 6,
    color: "red",
    position: "absolute",
    top: "9%"
  },
  FormSignUp: {
    width: "95%",
    height: "60%",
    justifyContent: "space-around"
  },
  GridYourName :{
    flexDirection:'row',justifyContent:'space-around'
  }
});
export default class BankAccount extends Component{
    render(){
        return(
            <Container>
            <Header style={{ backgroundColor: "white" }}>
                <Left>
                <View style={{ justifyContent: "center"}}>
                    <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.goBack()}}><Text ><Icon size={20}  name="chevron-left"></Icon> </Text></Button>
                </View>
                </Left>
                <Body  style={{justifyContent: "center" ,alignItems:"center",flex:2}}>
                
                    <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Settings</Text>
                     
                     
               
                </Body>
                <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Inbox")}}><ImageBackground source={require('../images/bell.png')} style={{width:18,height:20}}>
                <Badge style={{borderRadius: 20,width: 20,height: 20,alignSelf: "flex-start",marginLeft:8, marginTop:'-45%'
                 }}><Text style={{color:'white'}}>6</Text></Badge>
           </ImageBackground>
           </TouchableOpacity>
    
                <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}  >
                <Ionicons name="md-menu" size={25}></Ionicons>
                     </TouchableOpacity>
                </Right>
                </Header>
            <Content padder style={{marginBottom:10}}>
            <View style={{marginTop:18}}>
                <Text style={{fontWeight:'bold', fontSize:20,marginBottom:20}}> Bank account</Text>  
            </View>
              <Form style={styleSUp.FormSignUp}>
              <Item stackedLabel>
                  <Label>Bank Name</Label>
                  <Icon name="asterisk"
                    style={[
                      styleSUp.Icon,
                      { left: "26%"} ]}
                  />
                  <Input   style={[styles.fontSizeInPut,{fontSize:18}]} />
                </Item>
                <Item stackedLabel>
                  <Label>Andress</Label>
                  
                  <Input    textContentType="emailAddress" style={[styles.fontSizeInPut,{fontSize:18}]} />
                </Item>
                <Item stackedLabel>
                  <Label>Routing Number</Label>
                  <Icon name="asterisk"
                    style={[
                      styleSUp.Icon,
                      { left: "36%"} ]}
                  />
                  <Input    style={[styles.fontSizeInPut,{fontSize:18}]} />
                </Item>
                <Item stackedLabel>
                  <Label>Account Number</Label>
                  <Icon name="asterisk"
                    style={[
                      styleSUp.Icon,
                      { left: "36%"} ]}
                  />
                  <Input   style={[styles.fontSizeInPut,{fontSize:18}]} />
                </Item>
               
                    <Item style={{borderBottomWidth:0,marginTop:10}} ><Label>Scan or take a picture of check</Label></Item>
              </Form>
              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:18,marginLeft:5,marginBottom:30}}>
                      <TouchableOpacity style={{borderColor:'lightgray'
                      ,borderStyle:'dashed'
                      ,width:150,height:100,borderWidth:1,
                      flexDirection:'row',
                      justifyContent:'center',
                      alignItems:'center'}}>
                        <Image
                            source={require('../images/camera.png')}
                        ></Image>
                      </TouchableOpacity>
                      <TouchableOpacity style={{borderColor:'lightgray'
                      ,borderStyle:'dashed'
                      ,width:150,height:100,borderWidth:1,
                      flexDirection:'row',
                      justifyContent:'center',
                      alignItems:'center',marginLeft:'3%'}}>
                        <Image
                            source={require('../images/picture.png')}
                        ></Image>
                      </TouchableOpacity>
                </View>
                 
                
             
            </Content>
            
            <View style={{ paddingHorizontal: "5%", justifyContent: 'center',flexDirection: 'row',alignItems: 'center',marginBottom:10}}>
                <Button full style={{width:'50%',borderRadius:3,backgroundColor:'#0764b0'}} onPress={()=>{this.props.navigation.navigate('AddBankAndCard')}}>
                  <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Add</Text>
                </Button>
              </View>
           
          </Container>
        )
    }
}
