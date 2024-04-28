import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Brand } from '../../../types';
import { theme } from '../../../theme';
import { PressableScale } from '../../../common/pressable-scale';

const BrandCard = ({ brand, onPress }: { brand: Brand; onPress(): void }) => {
  return (
    <PressableScale style={styles.card} onPress={onPress}>
      <Image source={{ uri: brand.logo }} style={styles.logo} resizeMode="contain" />
      <View style={styles.info}>
        <Text style={styles.name}>{brand.name}</Text>
        <Text style={styles.desc} numberOfLines={1}>
          {brand.desc}
        </Text>

        <View style={styles.dateContainer}>
          <MaterialIcons
            name="event"
            size={26}
            color={theme.colors.darkGray}
            style={styles.dateIcon}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={
                styles.date
              }>{`discount available from ${brand.startDate} to ${brand.endDate}`}</Text>
          </View>
        </View>
      </View>
    </PressableScale>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 21,
    marginRight: 10,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.secondary,
  },
  desc: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateIcon: {
    marginRight: 4,
  },
  date: {
    fontSize: 12,
    color: '#333',
  },
});

export default BrandCard;
