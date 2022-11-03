<Text style={styles.header}>Let's Get Started!</Text>
<Text style={styles.text1}>
  Create an accountto Q Allure to get all features
</Text>
<View style={styles.inputView}>
  <TextInput
    style={styles.textInput}
    placeholder="Name"
    value={name}
    onChangeText={txt => setName(txt)}
    placeholderTextColor="grey"
  />
</View>
<View style={styles.inputView}>

  <TextInput
    style={styles.textInput}
    placeholder="Email"
    value={email}
    onChangeText={txt => setEmail(txt)}
    placeholderTextColor="grey"
  />
</View>
<View style={styles.inputView}>
  <TextInput
    style={styles.textInput}
    placeholder="Phone"
    placeholderTextColor="grey"
  />
</View>
<View style={styles.inputView}>
  <TextInput
    style={styles.textInput}
    placeholder="Password"
    placeholderTextColor="grey"
  />
</View>
<View style={styles.inputView}>
  <TextInput
    style={styles.textInput}
    placeholder=" Confirm Password"
    placeholderTextColor="grey"
  />
</View>
<TouchableOpacity style={styles.createBtn} onPress={saveName}>
  <Text style={styles.createText}>CREATE</Text>
</TouchableOpacity>