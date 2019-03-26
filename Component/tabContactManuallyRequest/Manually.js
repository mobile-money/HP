import React, { Component } from 'react';
import {Text,StyleSheet,View,Image} from 'react-native'

import { Container, Header, Left, Body, Footer, Button, Label,Input, Content,Item, Form} from 'native-base';

export default class TabManually extends React.Component{
    render (){
        return(
          <Container>
            <Content>
                
                    <Text style={{marginTop:'4%',fontSize:18,color:'black'}}>Receiver information</Text>
                
                    <Form>
            <Item stackedLabel>
              <Label >Full Name</Label>
              <Input />
            </Item>
            <Item stackedLabel >
              <Label >Phone Number</Label>
              <Input />
            </Item>
            <Item stackedLabel >
              <Label >Email Address</Label>
              <Input />
            </Item>
          </Form>
         
            </Content>
          </Container>
            );
    }
}
var site=StyleSheet.create({
    
    btn:{
      backgroundColor:'#00B2EE',
    width:'45%',
    
    borderRadius: 4,
    justifyContent: 'center',
      alignItems:'center'
    },
    btn1:{
     
     color:'white',
     fontSize:16,
     },
     view:{marginTop:'15%',
        flex:1, justifyContent: 'center',alignItems:'center',flexDirection:'row'
     }
  });