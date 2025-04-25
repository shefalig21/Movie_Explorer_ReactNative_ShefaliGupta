// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const SignUp = () => {
//   const navigation = useNavigation();

//   const [name, setName]=useState('');
//   const [email, setEmail]=useState('');
//   const [password, setPassword]=useState('');
//   const [role, setRole]=useState('');

//   const handleSignUp = () => {
//     if (!fullName || !email || !password || !role) {
//       Alert.alert('Please fill all fields');
//     } 
//     else if (!email.includes('@') || !email.includes('.')) {
//       Alert.alert('Enter a valid email');
//     } 
//     else if (password.length < 6) {
//       Alert.alert('Password must be at least 6 characters');
//     } 
//     else {
//       Alert.alert('Sign up successful');
//       navigation.replace("Login");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.innerContainer}>
//         <Text style={styles.title}>Sign Up</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Enter Your Name"
//           value={name}
//           onChangeText={setName}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Enter Your Email"
//           keyboardType="email-address"
//           value={email}
//           onChangeText={setEmail}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Enter Your Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Enter Your Role"
//           value={role}
//           onChangeText={setRole}
//         />

//         <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//           <Text style={styles.buttonText}>Sign Up</Text>
//         </TouchableOpacity>

//       </View>
//     </View>
//   );
// };

// export default SignUp;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 25,
//     backgroundColor: '#f4f4f4',
//   },
//   innerContainer: {
//     backgroundColor: '#fff',
//     width: '100%',
//     borderRadius: 8,
//     padding: 30,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     textAlign: 'center',
//     color: '#333',
//   },
//   input: {
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     width: '100%',
//     fontSize: 16,
//     color: '#333',
//   },
//   button: {
//     backgroundColor: '#1e90ff',
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 15,
//     width: '100%',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });





// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const SignUp = () => {
//   const navigation = useNavigation();

//   const [name, setName]=useState('');
//   const [email, setEmail]=useState('');
//   const [password, setPassword]=useState('');
//   const [role, setRole]=useState('');

//   const handleSignUp = () => {
//     if (!fullName || !email || !password || !role) {
//       Alert.alert('Please fill all fields');
//     } 
//     else if (!email.includes('@') || !email.includes('.')) {
//       Alert.alert('Enter a valid email');
//     } 
//     else if (password.length < 6) {
//       Alert.alert('Password must be at least 6 characters');
//     } 
//     else {
//       Alert.alert('Sign up successful');
//       navigation.replace("Login");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.innerContainer}>
//         <Text style={styles.title}>Sign Up</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Enter Your Name"
//           value={name}
//           onChangeText={setName}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Enter Your Email"
//           keyboardType="email-address"
//           value={email}
//           onChangeText={setEmail}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Enter Your Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Enter Your Role"
//           value={role}
//           onChangeText={setRole}
//         />

//         <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//           <Text style={styles.buttonText}>Sign Up</Text>
//         </TouchableOpacity>

//       </View>
//     </View>
//   );
// };

// export default SignUp;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 25,
//     backgroundColor: '#f4f4f4',
//   },
//   innerContainer: {
//     backgroundColor: '#fff',
//     width: '100%',
//     borderRadius: 8,
//     padding: 30,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     textAlign: 'center',
//     color: '#333',
//   },
//   input: {
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     width: '100%',
//     fontSize: 16,
//     color: '#333',
//   },
//   button: {
//     backgroundColor: '#1e90ff',
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 15,
//     width: '100%',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });













import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();

  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [role, setRole]=useState('');

  const handleSignUp = () => {
    if (!fullName || !email || !password || !role) {
      Alert.alert('Please fill all fields');
    } 
    else if (!email.includes('@') || !email.includes('.')) {
      Alert.alert('Enter a valid email');
    } 
    else if (password.length < 6) {
      Alert.alert('Password must be at least 6 characters');
    } 
    else {
      Alert.alert('Sign up successful');
      navigation.replace("Login");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          placeholderTextColor="white"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          placeholderTextColor="white"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          placeholderTextColor="white"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Your Role"
          placeholderTextColor="white"
          value={role}
          onChangeText={setRole}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        
<TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginLink}>Login</Text>
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default SignUp;




const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 25,
      backgroundColor: '#0C0F14',
    },
    innerContainer: {
      backgroundColor: '#1F222A',
      width: '100%',
      borderRadius: 20,
      padding: 30,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#5B5FE9',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 6,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 30,
      textAlign: 'center',
      color: '#fff',
    },
   input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#7F83F9',
    borderRadius: 15,
    paddingHorizontal: 20,
    marginBottom: 18,
    width: '100%',
    fontSize: 16,
    backgroundColor: '#1F222A',
    color: 'white',
  },
    button: {
      backgroundColor: '#5B5FE9',
      paddingVertical: 15,
      borderRadius: 15,
      alignItems: 'center',
      marginTop: 10,
      width: '100%',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    },
    loginText: {
        color: '#999',
        marginTop: 10,
        fontSize: 14,
      },
      loginLink: {
        color: '#5B5FE9',
        fontWeight: 'bold',
      },
  });