import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import BrandCard from './components/brand-card';
import { brands } from '../../data/brands';
import QrCodeModal from './components/qrcode-modal';
import { Brand } from '../../types';

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<Brand | undefined>(undefined);

  const onBrandPressed = (brand: Brand) => {
    setIsModalVisible(true);

    setSelectedBrand(brand);
  };

  const onCloseQrModal = () => {
    setIsModalVisible(false);
    setSelectedBrand(undefined);
  };

  return (
    <View>
      <FlatList
        data={brands}
        keyExtractor={(item) => item.logo}
        renderItem={({ item }) => <BrandCard brand={item} onPress={() => onBrandPressed(item)} />}
      />
      <QrCodeModal brand={selectedBrand} isModalVisible={isModalVisible} onClose={onCloseQrModal} />
    </View>
  );
}

const styles = StyleSheet.create({});
