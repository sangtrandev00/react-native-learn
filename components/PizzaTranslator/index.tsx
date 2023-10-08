import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');

  const changeTextHandler = (newText: string) => {
    console.log('new text: ', newText);
    setText(newText);
  };

  return (
    <View style={{padding: 10}}>
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕 AHIHI')
          .join(' ')}
      </Text>

      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={changeTextHandler}
        defaultValue={text}
        value={text}
      />
    </View>
  );
};

export default PizzaTranslator;
