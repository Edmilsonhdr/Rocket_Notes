import { Container, Links, Content } from "./styles.js";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";


export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit quisquam 
            necessitatibus delectus reprehenderit ea ab temporibus odit. Mollitia laboriosam 
            impedit natus incidunt placeat nesciunt officiis distinctio tempora? Est, dolorem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, suscipit. Nesciunt 
            distinctio quod repudiandae repellat consequatur amet, voluptatem rerum quas minima 
            voluptate cupiditate omnis! Tempora quidem consectetur ad praesentium perspiciatis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo pariatur modi atque 
            vitae earum incidunt, fuga dolorum delectus possimus porro error voluptatibus repellat 
            saepe distinctio dolor molestias officiis commodi eveniet?
          </p>
          <Section title="Links Úteis">
            <Links>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node js" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
