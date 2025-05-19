// import PropertySearchForm from '@/components/PropertySearchForm';
// import Properties from '@/components/Properties';
import { connectDB } from '@/config/database';
import Property from '@/models/Property';

const PropertiesPage = async () => {
  await connectDB();
  const properties = await Property.find({}).lean();
  console.log(properties);

  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          {/* <PropertySearchForm /> */}
        </div>
      </section>
      {/* <Properties /> */}
    </>
  );
};
export default PropertiesPage;
