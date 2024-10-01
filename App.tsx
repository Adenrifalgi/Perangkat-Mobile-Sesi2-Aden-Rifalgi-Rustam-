import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.location}>
        <View>
          <Text style={styles.locationText}>Location</Text>
          <Text style={styles.locationName}>jampang ciemas</Text>
        </View>
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-Oyfye0qX1gVPsfDBGBt7K7Fe.png?st=2024-09-30T05%3A17%3A36Z&se=2024-09-30T07%3A17%3A36Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-29T19%3A57%3A55Z&ske=2024-09-30T19%3A57%3A55Z&sks=b&skv=2024-08-04&sig=FJXJPNnTcYnyrJ7YJOPnR0HJe4L8HGlPvlflq2KQU1k%3D',
          }}
        />
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search coffee"
        placeholderTextColor="#888"
      />
      <View style={styles.promo}>
        <Image
          style={styles.promoImage}
          source={{
            uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-hdlkaLWH7tDuHna1EkiVEdBC.png?st=2024-09-30T05%3A17%3A35Z&se=2024-09-30T07%3A17%3A35Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-30T01%3A18%3A58Z&ske=2024-10-01T01%3A18%3A58Z&sks=b&skv=2024-08-04&sig=1upbFNfMgG1MEtb0r4744IN%2BAAh7O73gEc2PuQDhQk0%3D',
          }}
        />
        <View style={styles.promoBadge}>
          <Text style={styles.promoBadgeText}>Promo</Text>
        </View>
        <Text style={styles.promoText}>Buy one get one FREE</Text>
      </View>
      <View style={styles.categories}>
        <TouchableOpacity
          style={[styles.categoryButton, styles.activeCategory]}>
          <Text style={styles.categoryText}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Machiatto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Latte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Americano</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.products}>
        <View style={styles.productCard}>
          <Image
            source={require('./coffelatte.webp')}
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <View>
              <Text style={styles.productTitle}>Cappuccino</Text>
              <Text style={styles.productSubtitle}>with Chocolate</Text>
              <Text style={styles.productPrice}>$ 4.53</Text>
            </View>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.productCard}>
          <Image
            style={styles.productImage}
            source={{
              uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-Z3ou6OXiSQ7pnuo6G9ZIRNuZ.png?st=2024-09-30T05%3A17%3A39Z&se=2024-09-30T07%3A17%3A39Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-30T01%3A05%3A41Z&ske=2024-10-01T01%3A05%3A41Z&sks=b&skv=2024-08-04&sig=XvCgYzHTKrhq5jE/WCiWa0dGcGWfGmgXfglamRfAaxc%3D',
            }}
          />
          <View style={styles.productInfo}>
            <View>
              <Text style={styles.productTitle}>Cappuccino</Text>
              <Text style={styles.productSubtitle}>with Oat Milk</Text>
              <Text style={styles.productPrice}>$ 3.90</Text>
            </View>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.productCard}>
          <Image
            style={styles.productImage}
            source={{
              uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-N4cQsmTI7d2AkbpOTi48vjv9.png?st=2024-09-30T05%3A17%3A33Z&se=2024-09-30T07%3A17%3A33Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-29T17%3A13%3A52Z&ske=2024-09-30T17%3A13%3A52Z&sks=b&skv=2024-08-04&sig=xf7Wrcp7yrfshxTSl0SjQN6CiZwyIBrhmVct8HHE2X8%3D',
            }}
          />
          <View style={styles.productInfo}>
            <View>
              <Text style={styles.productTitle}>Cappuccino</Text>
              <Text style={styles.productSubtitle}>with Almond Milk</Text>
              <Text style={styles.productPrice}>$ 4.50</Text>
            </View>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.productCard}>
          <Image
            style={styles.productImage}
            source={{
              uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-JAo64SolORGiaWt8gAiLhBW0.png?st=2024-09-30T05%3A17%3A39Z&se=2024-09-30T07%3A17%3A39Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-30T00%3A54%3A39Z&ske=2024-10-01T00%3A54%3A39Z&sks=b&skv=2024-08-04&sig=VwaBnCh%2BdlV9A%2BCCl83m/Iww23dlqE/e1FedaRfIjPE%3D',
            }}
          />
          <View style={styles.productInfo}>
            <View>
              <Text style={styles.productTitle}>Cappuccino</Text>
              <Text style={styles.productSubtitle}>with Soy Milk</Text>
              <Text style={styles.productPrice}>$ 4.00</Text>
            </View>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 20,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationText: {
    color: '#888',
  },
  locationName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchBar: {
    backgroundColor: '#2c2c2c',
    color: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  promo: {
    position: 'relative',
    marginBottom: 20,
  },
  promoImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  promoBadge: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  promoBadgeText: {
    color: 'white',
    fontSize: 14,
  },
  promoText: {
    position: 'absolute',
    top: 50,
    left: 20,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#3e3e3e',
    padding: 10,
    borderRadius: 20,
  },
  activeCategory: {
    backgroundColor: '#b5651d',
  },
  categoryText: {
    color: 'white',
    fontSize: 14,
  },
  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#2c2c2c',
    borderRadius: 10,
    padding: 10,
    width: '48%',
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  productTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productSubtitle: {
    color: '#888',
  },
  productPrice: {
    color: '#b5651d',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#b5651d',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 18,
  },
});
