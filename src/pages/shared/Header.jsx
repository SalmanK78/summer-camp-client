import React from "react";
import { Link } from "react-router-dom";

const Header = ({children,login}) => {
  return (
    <div style={{
            width:'100%',
            height:`${login ? '200px':'300px'}`,
            
            backgroundImage:'url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NEA8NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFRIWFhURFRUYHSggGBolGxUTITEhMSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFQ8NFS0ZFRkrKy0tLTctLTctKzctKystLS0tLS0tKy0tNzc3Ky0tKzcrKysrKy03Ky0rLSsrLS0rK//AABEIAQMAwgMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAKRABAQEBAAAFAgYDAQEAAAAAAAECETFBgbHBIdEDEnGR4fBRcqEyBP/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBgX/xAAdEQEBAQEBAQADAQAAAAAAAAAAARECMUEhYfAS/9oADAMBAAIRAxEAPwD4GfDcGT2F9Z5/WzBkbMNIabTSfB8lkPk4i1TJsFyfKmVNpPf3U0nr7iFC5PSw6odaK5hMxXMCOqbPgnVpPonZ9QiVPfzUr5rb+alrzDTmhfL19o18/wBb8Nf7/wAG/N+B9Uprw9Mq/wD0f+r/AK59on5emVfxvG/659j+M77/AH6Sk8TZ8b+laQZPr6UhanWasjDebIPBkHiXVa2YaRsw0gTa0hssMVEWnybJcnyaKNJfuelqoUoQ/CyKSGLWkVzCyK5gZdUZPonqLSfRPUCZUtRLS2olYGvNJf7/AMH734at978Bas8P2V/F8b/rEs+H7Lb+IGV9TkNz5afA/wAkWpWMzJW86Q0jSHkQ6LWkNI0hpDRaHGkNxuKhaMPCw8NFrUvD8aRRaEh5GkPmBNoyK5nsGYpJ7BlaE8CWfX1Vk+hNT6+oKVDUSsX3ErDa81Jue9+DBz3vwTQ+PC+i1+Il+H4X0V8vQM+vW57Bzx9TfZp5+oTqLCJL150PIXKmWbooyGkaQ0hs7W4HD8bioWhIaRpDcNLcaQ3GkNOtIfMCQ+YE2qZiknsGIpJ7BjaWQmp9fVXhNQDUNRKx0aiOobXmo8bnv9jcAmmjieKvknlXn0JPQyFvn6qQNTxNErnrNRDRwRTJIplk6Ojw0CGhsqPG4I8VE6Eh+BIbhla3BkGGkNGhIaQeDIE2q4ikhcw6WNKWnpb4qhxHUTsWsJYbSVz8DilgcDTQzFefQuYpZ9IlNoQNeZi68KcKIVmrG1cMVyllXDFv0pDQsNk4yp4PBybikaWQ/G4bhptLw8gcUkCbQ4Mg8GBGqZOGYZLOlpT0vmqHKnwtishbDVrnsDilhTaaEhqENfBJFLrwpqTXhThxKsFY2riyplLNUzWLo6VimUorhUY9K5ikhcKSKY9UOCPGsCQikhFISaHBjDASuDFwZLMtDg1p4qhhJ7BwwKgR1CcV0ThtJSDrwYNJMtJq/Q1TtNpIRiWsGuOOKZSimWTfpbK2EMrYVGHTpwrIlhaKc/XpbG4NYJBWJqkVLWjUIRK4MTNMSGoebUDMzNGUE9EPoqlQhNKVPSauEqej1LdDWROsW1g1ccqmUoplnHRV8L4QwthcYdOrCsRwrKbl69a1gtYEaKJRVKegpejSmIpmn6nkyUWDaHQtL0zkVlbpJR6YxtENU7VKkapbPalukvmEtS/EPanuk2iVEKwauTKmUZVM1Eb1fC+HPirYqow6jqxVZUMVWVTm6g0YXowJw8UtSh7UpsalGlhiRTI2la0is/LWh0LS9CsVlHpJW6aTaqdo6qdpqkG1HdNdJbpNOYXpNUel0G0hBBiaY4ofNTNlMb10Yq+K5sVfFVGHUdGKrK581SVTDqKdNmpdPmhFip7U5RtSijaEpbWgPFZQtLKFoJrQ6W0OmrFet1PodBf5U1pLWm1pPVC5Buk9VrSWk0kEumlDQVC9YrEtxymhIOUx01fFWzUMVTNWx6jozTyo5p5TY2KynzUJVMU0WLyjanK3Us8Pa0pOjKBinS6odJqgSNrReltDprxX8wfmJ0tpDFLolpbS2hUg2ltDpbSXIbrUvWtB4HQL1krxxmlIbIjoq2apKjmnlUzsWlPNIymlVGdisquK55Vc0M+ot0fzJdbpM8V6MqUppQLFLU9UbU9UCRrQ6W0OhpinS2h0toGGtLaW0OkqQegHQ6Wqw3QtDoWloxusXrErHKOQHJt6pDSkhlIp5TSp9GUJxWVTNQlUzTRYt1up/mHpM8UlNKnmmlCbFLU9UbSaoEgWh0todDTD9LaXoWinINpehaCVYbodBgeD1rS2t0hjdYGJWIQYEGKaGhiQxpo9GUvR6cLDynzUenlJNivR6nb7DKE4tmmlTxR6EWHtJqjaTVAkbpet0OheNaW0LQ6FYNrFo9SeDGCMBjWh0LW/kjwQZiGJxo0GLW0N5FniPkZVm79Aby/cAemlT78D0hYr32NKl3w/Q8CbFsD0uG6Izw1pdVrQ1QJGLWAlSFtDoWt0LwbWhaaEBjNAIBpv5Lqt/IPDMzAizwaMy1BPE3l+zMYL/f8AjeX7sxAL5+ggxGb/AB+ik8P3Zgiq4aswR9D/AA2mYAP8FoMSoWgzBTUYLEGgCwJPXy38sxLMzMaX/9k=")'
    }}>
      <div style={{
        height:`${login ? '200px':'300px'}`
      }} className='header flex items-center  justify-center flex-col'>
            <h1 className="text-white text-5xl font-bold">{children}</h1>
            <h3 className="font-bold text-lg mt-5"> <Link to={-1} className="text-white hover:text-red-600"> Home </Link> <span className="text-red-600"> //{children}</span></h3>
      </div>
    </div>
  );
};

export default Header;