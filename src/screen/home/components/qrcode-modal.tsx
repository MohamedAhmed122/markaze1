import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { Brand } from '../../../types';
import QRCode from 'react-native-qrcode-svg';
import { theme } from '../../../theme';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
  brand?: Brand;
  isModalVisible: boolean;
  onClose(): void;
};
export default function QrCodeModal({ brand, isModalVisible, onClose }: Props) {
  if (!brand) {
    return <></>;
  }
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={onClose}
      style={styles.modal}
      backdropTransitionOutTiming={0}
      useNativeDriver={true}>
      <View style={styles.modalContent}>
        <Pressable style={styles.closeButton} onPress={onClose}>
          <MaterialIcons name="cancel" size={35} color={'gray'} />
        </Pressable>
        <View style={styles.modalBody}>
          <Text style={styles.brandName}>{brand.name}</Text>
          <Text style={styles.discountText}>
            Get up to <Text style={styles.discountValue}>{brand.discount}%</Text> discount
          </Text>
          <QRCode value={brand.qrCode} size={280} logoBackgroundColor="transparent" />
          <View style={styles.dateContainer}>
            <MaterialIcons
              name="event"
              size={26}
              color={theme.colors.primary}
              style={styles.dateIcon}
            />
            <Text
              style={
                styles.date
              }>{`discount available from ${brand.startDate} to ${brand.endDate}`}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
  },
  closeButton: {
    marginLeft: 'auto',
    marginTop: 10,
    marginRight: 10,
  },
  modalBody: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  brandName: {
    fontSize: 25,
    fontWeight: '700',
    color: theme.colors.primary,
    marginVertical: 20,
  },
  discountText: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 15,
  },
  discountValue: {
    color: theme.colors.danger,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
    marginBottom: 30,
    marginTop: 10,
  },
  dateIcon: {
    marginRight: 4,
  },
  date: {
    fontSize: 12,
    color: theme.colors.primary,
  },
});
