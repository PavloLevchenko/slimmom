import Container from 'components/Container';
import { useDairyStore } from 'hooks/dairyStoreHook';
import {
  DeleteButton,
  IconCross,
  List,
  ListItems,
  DataProduct,
  NameProduct,
  Kcal,
  Weight,
} from './DiaryProductsListItem.styled';
export const data = [
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff555c',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Гречневая крупа (ядрица) зелёная',
      ua: 'Гречана крупа (ядриця) зелена',
    },
    calories: 296,
    groupBloodNotAllowed: [null, true, false, true, true],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553a',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (вареное всмятку)',
      ua: 'Яйце куряче (варене всмятку)',
    },
    calories: 159,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff5530',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Омлет с сыром',
      ua: 'Омлет із сиром',
    },
    calories: 342,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff5539',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (вареное вкрутую)',
      ua: 'Яйце куряче (варене круто)',
    },
    calories: 160,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff552c',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373632ff555c',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Гречневая крупа (ядрица) зелёная',
      ua: 'Гречана крупа (ядриця) зелена',
    },
    calories: 296,
    groupBloodNotAllowed: [null, true, false, true, true],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2313622ff553a',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (вареное всмятку)',
      ua: 'Яйце куряче (варене всмятку)',
    },
    calories: 159,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51691802b2373622ff5530',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Омлет с сыром',
      ua: 'Омлет із сиром',
    },
    calories: 342,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373722ff5539',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (вареное вкрутую)',
      ua: 'Яйце куряче (варене круто)',
    },
    calories: 160,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694882b2373622ff552c',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
];

export default function DiaryProductsListItem() {
  const { dairyData, deleteDairyProduct } = useDairyStore();

  console.log(dairyData._id.$oid);

  const handleDelete = ({ $oid }) => {
    deleteDairyProduct($oid);
  };
  return (
    <Container>
      <List>
        {data.map((e, i, ar) => {
          return (
            <ListItems key={e._id.$oid}>
              <NameProduct noWrap>{e.title.ua}</NameProduct>
              <DataProduct>
                <Weight noWrap>{e.weight} g</Weight>
                <Kcal noWrap>{e.calories}kcal</Kcal>
              </DataProduct>
              <DeleteButton
                type="button"
                onClick={() => {
                  handleDelete(e._id);
                }}
              >
                <IconCross />
              </DeleteButton>
            </ListItems>
          );
        })}
      </List>
    </Container>
  );
}
