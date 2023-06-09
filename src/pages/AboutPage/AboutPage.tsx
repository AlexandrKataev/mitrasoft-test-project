import { Col, Container, Row, Image, Stack, ListGroup, Badge } from 'react-bootstrap';
import { BackButton, MyBadge } from 'shared/ui';

import myPhoto from 'shared/images/myPhoto.png';

export const AboutPage = () => {
  return (
    <div>
      <BackButton />
      <Container className="bg-white p-4 border rounded-3 ">
        <Row xs={1} sm={1} md={2} className="d-flex justify-content-center ">
          <Col className="col-md-4 d-flex justify-content-center ">
            <Image src={myPhoto} width="200px" height="200px" roundedCircle />
          </Col>
          <Col>
            <h3 className="p-1">Катаев Александр Дмитриевич</h3>
            <h5 className="p-1">Front-end разработчик</h5>

            <div>
              <span className="p-1 opacity-50">тел:</span>
              <span className="p-1">8-965-621-12-32</span>
            </div>
            <div>
              <span className="p-1 opacity-50">email:</span>
              <span className="p-1">dkeyman@mail.ru</span>
            </div>
            <a href="https://github.com/AlexandrKataev" target="_blank">
              github.com/AlexandrKataev
            </a>
          </Col>
        </Row>
      </Container>

      <div className="mt-3 bg-white p-4 border rounded-3 ">
        <div className="mb-4">
          <h4>Ключевые навыки</h4>
          <div className="mb-1">
            {['JavaScript', 'CSS/SASS', 'HTML', 'TypeScript'].map((el) => (
              <MyBadge title={el} key={el} />
            ))}
          </div>
          <div className="mb-1">
            {['React', 'Redux', 'Redux Toolkit', 'RTK Query', 'React Query', 'Redux Saga'].map(
              (el) => (
                <MyBadge title={el} key={el} />
              ),
            )}
          </div>
          <div className="mb-1">
            {[
              'Day.js',
              'Axios',
              'Bootstrap',
              'React Hook Form',
              'React Router',
              'Swagger Typescript Api',
            ].map((el) => (
              <MyBadge title={el} key={el} />
            ))}
          </div>
          <div className="mb-1">
            {['Firebase', 'Docker (на уровне запустить проект)'].map((el) => (
              <MyBadge title={el} />
            ))}
          </div>
          <div className="mb-1">
            {['Git', 'GitHub', 'Vercel'].map((el) => (
              <MyBadge title={el} key={el} />
            ))}
          </div>
          <div className="mb-1">
            {['Adobe Photoshop', 'Adobe Illustrator', 'Figma'].map((el) => (
              <MyBadge title={el} key={el} />
            ))}
          </div>
          <div className="mb-1">
            {['Английский (на уровне чтения документации)'].map((el) => (
              <MyBadge title={el} key={el} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 bg-white p-4 border rounded-3">
        <h4>Опыт</h4>
        <div>Собственные приложения на React и участие в стартапе:</div>
        <ListGroup className="mt-3">
          <ListGroup.Item className="p-3">
            <h5>Приложение для дыхательной гимнастики</h5>
            <div>
              <a href="https://github.com/AlexandrKataev/breath-react" target="_blank">
                github.com/AlexandrKataev/breath-react
              </a>
            </div>
            <div>
              {['Redux Toolkit', 'Firebase Authentification', 'Firestore Database'].map((el) => (
                <MyBadge title={el} key={el} />
              ))}
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="p-3">
            <h5>ToDo со сроком выполнения, поиском и сортировкой</h5>
            <div>
              <a href="https://github.com/AlexandrKataev/todo" target="_blank">
                github.com/AlexandrKataev/todo
              </a>
            </div>
            <div>
              {['React Query'].map((el) => (
                <MyBadge title={el} key={el} />
              ))}
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="p-3">
            <h5>Админ-панель для сервиса по аренде недвижимости</h5>

            <div>
              {['RTK Query', 'Docker Compose для запуска бэкенда', 'кодогенерация из Swagger'].map(
                (el) => (
                  <MyBadge title={el} key={el} />
                ),
              )}
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="mt-3 bg-white p-4 border rounded-3">
        <h4>Предыдущие места работы</h4>
        <ul>
          <li className="my-3">
            2016-2023г. – Художник-дизайнер в студии портретов Fresh Art (Казань). Создание
            портретов в Photoshop на графическом планшете.
          </li>
          <li className="my-3">
            2013-2016г. – Разработка игр на FPS Creator. Продажа своих игр в Steam.
          </li>
        </ul>
      </div>

      <div className="my-3 bg-white p-4 border rounded-3">
        <h4>Коротко о себе</h4>
        <p>
          Разработку на JavaSrcipt вперые попробовал год назад, когда захотелось сделать
          веб-приложение, аналоги которого работали не так, как мне нужно. С тех пор понравилось
          создавать пользовательские интерфейсы. До этого был опыт в дизайне сайтов и в разработке
          игр с несложными скриптами. Хочу и готов развиваться как разработчик, изучать новые
          технологии и подходы. В состоянии самостоятельно находить решения, а так же предлагать
          свои мысли и идеи. Хобби: музыка, гитара, сноуборд. Без вредных привычек. Спасибо за
          прочтение ;-)
        </p>
      </div>
    </div>
  );
};
