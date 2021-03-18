import React from 'react';

import tshirtImage from "../../assets/tshirt.png";
import SellerInfo from "../SellerInfo"
import ProductAction from "../ProductAction"

import { 
  Container, 
  Row, 
  Panel, 
  Column, 
  Gallery, 
  Section, 
  Description 
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
        <Row>
          <a href="#">Compartilhar</a>
          <a href="#">Vender um igual</a>
        </Row>

        <Panel>
          <Column>
            <Gallery>
              <img src={tshirtImage} alt="T-Shirt"/>
            </Gallery>

            <Info />
          </Column>
          
          <Column>
            <ProductAction />
            <SellerInfo />

            <WarrantySection />
            <WarrantySection />
            <WarrantySection />
          </Column>
        </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o GUIGUI</p>
        <p className="description">Receba o produto que você está esperando ou devolvemos seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor: </p>
        <p className="description">
          Sem garantia
        </p>
      </span>
    </div>

    <a href="#">Saiba mais sobre a garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus magna, faucibus et mattis eu, ornare in elit. Maecenas laoreet sed odio fermentum dapibus. Cras aliquet lobortis feugiat. Cras iaculis consequat feugiat. Pellentesque quis molestie metus. Ut ac libero nunc. Aliquam et urna in enim scelerisque varius. Praesent urna turpis, vulputate in eros sed, sodales faucibus tortor. Aliquam eu pharetra arcu. Quisque ac arcu at ex consectetur vulputate a id lectus. Suspendisse euismod mi et porttitor cursus. Etiam iaculis a ante non pharetra. Nulla euismod, orci sodales pulvinar egestas, ex dolor suscipit ipsum, eu commodo lacus nisl sit amet felis.
    
      <br />
      <br />
      Itens Inclusos: <br />
      -1x Led<br />
      -1x Led<br />
      -1x Led<br />
      -1x Led<br />
      -1x Led<br />
      -1x Led<br />

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus magna, faucibus et mattis eu, ornare in elit. Maecenas laoreet sed odio fermentum dapibus. Cras aliquet lobortis feugiat. Cras iaculis consequat feugiat. Pellentesque quis molestie metus. Ut ac libero nunc. Aliquam et urna in enim scelerisque varius.
    </p>

    
  </Description>
)

export default Product;
