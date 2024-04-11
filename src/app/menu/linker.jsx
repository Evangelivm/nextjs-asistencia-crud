import Link from "next/link";

function Linker({ comp }) {
  return (
    <Link href={`/comp/${comp.compañia}`}>
      <div
        key={comp.compañia}
        className=" hover:text-white hover:bg-redSecond lg:text-xl text-yellowFirst rounded bg-redFirst text-center py-4 sm:text-sm"
      >
        Compañia {comp.compañia}
      </div>
    </Link>
  );
}

export default Linker;
