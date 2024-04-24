import { FormCardComponent } from "@/components/form-card.component";
import { HeroComponent } from "@/components/hero.component";

const AppPage = () => {
  return (<>
    <div className='mb-12 relative'>
      <HeroComponent />
    </div>
    <div>
      <FormCardComponent />
    </div>
  </>
  )
};

export default AppPage;
