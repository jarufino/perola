import React ,{Component}from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class EmailAndPassword extends Component {
    state={
        email:'',
        senha:'',
        error:''
    }
  render() {
      return (
    <View styles={styles.container}>
      <TextInput placeholder="Email" style={styles.input} value={this.state.email} onChangeText={email=>this.setState({email})} placeholderTextColor="#FFD700"/>
      <TextInput placeholder="Senha" style={styles.input} value={this.state.senha} onChangeText={senha=>this.setState({senha})} placeholderTextColor="#FFD700"/>
      <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
          <Text style={styles.errorText}>
              {this.state.error}
          </Text>
      </TouchableOpacity>
     </View>
  );
    }
}
const styles=StyleSheet.create({
    container:{        
        flex:1,        
    },
    input:{        
        width:235,
        top:15,
        color:'red',
        height:40,                
        paddingHorizontal:95,
        marginBottom:5,
        borderRadius:13,
        backgroundColor:'rgba(0,0,0,0.5)',        
                    
    },
    errorText:{
        top:40,
        fontSize:15,
        color:'red',
        alignSelf:'center',
    },
    buttonText:{        
        left:25,
        fontSize:20,
        fontWeight:'bold'        
    },
    buttonContainer: {
        backgroundColor:'#3b3b',
        width:100,
        alignContent:'center',
        top:20
    }
});
export default EmailAndPassword;