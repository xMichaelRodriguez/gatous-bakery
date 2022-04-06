import categories from './categorias';
import { TiposCardComponent } from './TiposCardComponent';

interface ICategory {
  title: string;
  icon: string;
}
export const TiposComponent = () => {
  return (
    <>
      <h2 className='display-2 text-center fw-bold text-primary'>
        <ins> Nuestras Categorias</ins>
      </h2>
      <div className='row row-cols-1 row-cols-md-2 g-4 py-3 text-primary'>
        {categories.map((category: ICategory) => (
          <TiposCardComponent key={category.title} {...category} />
        ))}
      </div>
      <div className='text-center'>
        <button type='button' className='btn btn-primary text-white btn-lg'>
          Ir a la Tienda
        </button>
      </div>
    </>
  );
};
