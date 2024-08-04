import Container from './Container'
const SearchUsers = ({submitHandler, onchangeHandler}) => {
  return (
    <>
   <Container>
<form onSubmit={submitHandler} className="mt-10 justify-center gap-8 flex items-center">
<input
  onChange={onchangeHandler}
  type="text"
  placeholder='Enter GitHub Username...'
  className='placeholder:text-[20px] placeholder:text-start placeholder:text-gray-400 focus-visible:outline-[#9c9c9c] border rounded-lg border-black/80 w-1/3 py-3 px-4 font-semibold text-[24px] active:border-none'/>
<button type='submit' className="bg-black text-white px-10 text-[24px] font-bold text-center py-3 mb-[1px] rounded-lg shadow-lg transition-all duration-200 hover:bg-black/80 active:border active:border-black active:text-black active:bg-white ">Submit</button>
</form>
   </Container>
    </>
  );
};
 export default SearchUsers
