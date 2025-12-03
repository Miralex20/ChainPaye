import svgPaths from "./svg-plv5twbh8";

function Frame28() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Medium',sans-serif] font-medium gap-[17px] items-start relative shrink-0 text-center w-[706px]">
      <p className="leading-[48px] relative shrink-0 text-[#111528] text-[40px] tracking-[-0.4px] w-full">Tell us what you’re working on</p>
      <p className="leading-[28px] relative shrink-0 text-[#5a5f73] text-[20px] w-full">{`Please fill out the form below and let's discuss your integration with Chainpaye today!`}</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[250px]" data-name="Label">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#202024] text-[16px] text-nowrap whitespace-pre">
        First name<span className="text-[#d43939]">*</span>
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex gap-[116px] grow items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5a5f73] text-[16px] text-nowrap whitespace-pre">
        Bless<span className="text-[#111528]">|</span>
      </p>
    </div>
  );
}

function Placeholder() {
  return (
    <div className="basis-0 bg-neutral-100 grow min-h-px min-w-px relative rounded-[6px] shrink-0 w-full" data-name="Placeholder">
      <div aria-hidden="true" className="absolute border-[#cbd8f8] border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[20px] pr-[16px] py-[12px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Label />
      <Placeholder />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] h-[80px] items-start relative shrink-0 w-[377px]" data-name="Input">
      <Frame6 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[250px]" data-name="Label">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#202024] text-[16px] text-nowrap whitespace-pre">
        Last name<span className="text-[#d43939]">*</span>
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex gap-[116px] grow items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5a5f73] text-[16px] text-nowrap whitespace-pre">Idowu</p>
    </div>
  );
}

function Placeholder1() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative rounded-[6px] shrink-0 w-full" data-name="Placeholder">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[20px] pr-[16px] py-[12px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Label1 />
      <Placeholder1 />
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] h-[80px] items-start relative shrink-0 w-[377px]" data-name="Input">
      <Frame7 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[56px] items-center relative shrink-0 w-full">
      <Input />
      <Input1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[250px]" data-name="Label">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#202024] text-[16px] text-nowrap whitespace-pre">
        Email<span className="text-[#d43939]">*</span>
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex gap-[116px] grow items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5a5f73] text-[16px] text-nowrap whitespace-pre">&nbsp;</p>
    </div>
  );
}

function Placeholder2() {
  return (
    <div className="bg-[#fdfdfd] h-[46px] relative rounded-[6px] shrink-0 w-full" data-name="Placeholder">
      <div aria-hidden="true" className="absolute border border-[#d43939] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[46px] items-center pl-[20px] pr-[16px] py-[12px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[80px] items-start relative shrink-0 w-full">
      <Label2 />
      <Placeholder2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#d43939] text-[14px] text-nowrap tracking-[0.14px] whitespace-pre">Please complete this required field</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] h-[107px] items-start relative shrink-0 w-[377px]" data-name="Input">
      <Frame8 />
      <Label3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[250px]" data-name="Label">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#202024] text-[16px] text-nowrap whitespace-pre">Company name*</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex gap-[116px] grow items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5a5f73] text-[16px] text-nowrap whitespace-pre">&nbsp;</p>
    </div>
  );
}

function Placeholder3() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative rounded-[6px] shrink-0 w-full" data-name="Placeholder">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[20px] pr-[16px] py-[12px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[80px] items-start relative shrink-0 w-full">
      <Label4 />
      <Placeholder3 />
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-[377px]" data-name="Input">
      <Frame9 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[58px] items-start relative shrink-0 w-full">
      <Input2 />
      <Input3 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[250px]" data-name="Label">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#202024] text-[16px] text-nowrap whitespace-pre">Company website URL(optional)</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex gap-[116px] grow items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5a5f73] text-[16px] text-nowrap whitespace-pre">&nbsp;</p>
    </div>
  );
}

function Placeholder4() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative rounded-[6px] shrink-0 w-full" data-name="Placeholder">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[20px] pr-[16px] py-[12px] relative size-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Label5 />
      <Placeholder4 />
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] h-[80px] items-start relative shrink-0 w-full" data-name="Input">
      <Frame10 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[250px]" data-name="Label">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#202024] text-[16px] text-nowrap whitespace-pre">Which category best describes your business*</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[28.63%_10.51%_28.75%_10.51%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
        <g id="Group">
          <path d={svgPaths.p3c68f00} fill="var(--fill-0, #3D3D3D)" id="Vector" stroke="var(--stroke-0, #3D3D3D)" strokeWidth="0.666667" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-down">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#3d3d3d] text-[16px] text-nowrap whitespace-pre">Fintech</p>
      <ChevronDown />
    </div>
  );
}

function Placeholder5() {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative rounded-[6px] shrink-0 w-full" data-name="Placeholder">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[20px] py-[12px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[80px] items-start relative shrink-0 w-full" data-name="Dropdown">
      <Label6 />
      <Placeholder5 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#111528] text-[14px] text-nowrap whitespace-pre">Fintech</p>
    </div>
  );
}

function BoxSelect() {
  return (
    <div className="bg-[#efeff1] relative rounded-[5px] shrink-0 w-full" data-name="Box Select">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center px-[15px] py-[10px] relative w-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#111528] text-[14px] text-nowrap whitespace-pre">E-Commerce</p>
    </div>
  );
}

function BoxSelect1() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Box Select">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center px-[15px] py-[10px] relative w-full">
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#111528] text-[14px] text-nowrap whitespace-pre">Remittance Apps</p>
    </div>
  );
}

function BoxSelect2() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Box Select">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center px-[15px] py-[10px] relative w-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#111528] text-[14px] text-nowrap whitespace-pre">Investment Platforms</p>
    </div>
  );
}

function BoxSelect3() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Box Select">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center px-[15px] py-[10px] relative w-full">
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#111528] text-[14px] text-nowrap whitespace-pre">{`Lending & Savings Products`}</p>
    </div>
  );
}

function BoxSelect4() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Box Select">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center px-[15px] py-[10px] relative w-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#111528] text-[14px] text-nowrap whitespace-pre">Saas Platforms</p>
    </div>
  );
}

function BoxSelect5() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Box Select">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center px-[15px] py-[10px] relative w-full">
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#111528] text-[14px] text-nowrap whitespace-pre">NGOs</p>
    </div>
  );
}

function BoxSelect6() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Box Select">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center px-[15px] py-[10px] relative w-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#111528] text-[14px] text-nowrap whitespace-pre">others</p>
    </div>
  );
}

function BoxSelect7() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Box Select">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center px-[15px] py-[10px] relative w-full">
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#fdfdfd] box-border content-stretch flex flex-col gap-[8px] items-end p-[12px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)] shrink-0 w-[811.318px]">
      <BoxSelect />
      <BoxSelect1 />
      <BoxSelect2 />
      <BoxSelect3 />
      <BoxSelect4 />
      <BoxSelect5 />
      <BoxSelect6 />
      <BoxSelect7 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Dropdown />
      <Frame29 />
    </div>
  );
}

function CheckBox() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Check Box">
      <div className="absolute border border-[#999999] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#111528] text-[14px] text-nowrap whitespace-pre">Social Media</p>
    </div>
  );
}

function BoxSelect8() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Box Select">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[2px] py-[10px] relative w-full">
          <CheckBox />
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bottom-[35%] left-[30%] right-1/4 top-[35%]">
      <div className="absolute inset-[-6.67%_-4.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 7">
          <g id="Frame 1000002794">
            <path d={svgPaths.p181513c8} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CheckBox1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Check Box">
      <div className="absolute bg-[#3758f9] border border-[#3758f9] border-solid inset-0 rounded-[4px]" />
      <Frame11 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#111528] text-[14px] text-nowrap whitespace-pre">Search engine (Google/others)</p>
    </div>
  );
}

function BoxSelect9() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Box Select">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[2px] py-[10px] relative w-full">
          <CheckBox1 />
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function CheckBox2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Check Box">
      <div className="absolute border border-[#999999] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#111528] text-[14px] text-nowrap whitespace-pre">Referral</p>
    </div>
  );
}

function BoxSelect10() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Box Select">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[2px] py-[10px] relative w-full">
          <CheckBox2 />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function CheckBox3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Check Box">
      <div className="absolute border border-[#999999] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#111528] text-[14px] text-nowrap whitespace-pre">Event / Webinar</p>
    </div>
  );
}

function BoxSelect11() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Box Select">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[2px] py-[10px] relative w-full">
          <CheckBox3 />
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function CheckBox4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Check Box">
      <div className="absolute border border-[#999999] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#111528] text-[14px] text-nowrap whitespace-pre">Blog/Article</p>
    </div>
  );
}

function BoxSelect12() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Box Select">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[2px] py-[10px] relative w-full">
          <CheckBox4 />
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function CheckBox5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Check Box">
      <div className="absolute border border-[#999999] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#111528] text-[14px] text-nowrap whitespace-pre">Other</p>
    </div>
  );
}

function BoxSelect13() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Box Select">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[2px] py-[10px] relative w-full">
          <CheckBox5 />
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
      <BoxSelect8 />
      <BoxSelect9 />
      <BoxSelect10 />
      <BoxSelect11 />
      <BoxSelect12 />
      <BoxSelect13 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[294px]">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#202024] text-[16px] w-full">
        How did you hear about Chainpaye?<span className="text-[#d43939]">*</span>
      </p>
      <Frame30 />
    </div>
  );
}

function CheckBox6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Check Box">
      <div className="absolute border border-[#999999] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#111528] text-[14px] text-nowrap whitespace-pre">I agree to receive product updates from Chainpaye.</p>
    </div>
  );
}

function BoxSelect14() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Box Select">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[2px] py-[10px] relative w-full">
          <CheckBox6 />
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[#111528] text-[0px] text-[14px] w-[min-content] whitespace-pre-wrap">
        <span>{`You can unsubscribe from these updates at any time.  For more information on how we look after your data, please, see our `}</span>
        <span className="[text-underline-position:from-font] decoration-solid text-[#003dff] underline">Privacy Policy.</span>
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[717px]">
      <BoxSelect14 />
      <Frame27 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame32 />
      <Frame33 />
      <Input4 />
      <Frame38 />
      <Frame31 />
      <Frame34 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#003dff] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Submit</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0 w-[812px]">
      <Frame35 />
      <Button />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-neutral-100 relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[54px] py-[40px] relative w-full">
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

export default function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-center relative size-full">
      <Frame28 />
      <Frame37 />
    </div>
  );
}