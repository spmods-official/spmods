interface SectionHeaderProps {
  children: React.ReactNode;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return <header className="text-2xl font-bold mt-6 mb-2">{children}</header>;
}
