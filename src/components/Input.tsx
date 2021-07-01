import React, { useRef, useEffect }  from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { useField } from '@unform/core';

function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: '' });
        ref._lastNativeText = '';
      }
    })
  }, [fieldName, registerField]);

  return (
    <>
      { label && <Text style={styles.label}>{label}</Text> }

      <TextInput
        style={styles.input}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: '700',
    marginBottom: 5,
    fontSize: 12,
    color: '#666666',
    paddingLeft: 10,
  },

  input: {
    marginBottom: 15,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 0,
    backgroundColor: '#F1F1F1',
    fontSize: 15,
    color: '#444',
  },
});

export default Input;