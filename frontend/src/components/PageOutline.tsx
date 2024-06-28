import { Flex, Box, Link, IconButton, VStack, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'

// Define a type for the heading information
type HeadingInfo = {
  id: string
  text: string | null
  level: string
}

const PageOutline = () => {
  const { isOpen, onToggle } = useDisclosure()

  // Use the HeadingInfo type for the useState hook
  const [headings, setHeadings] = useState<HeadingInfo[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Dynamically collect headings from the document
    const collectedHeadings: HeadingInfo[] = Array.from(document.querySelectorAll('h1, h2, h3'))
      .map((heading) => ({
        id: heading.id,
        text: heading.textContent,
        level: heading.tagName,
      }))

    setHeadings(collectedHeadings)
  }, []);

  return (
    <Flex
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      height="60px"
      padding="0 20px"
      bg="gray.50"
      boxShadow="md"
      alignItems="center"
      justifyContent="space-between"
      zIndex="banner"
    >
      <IconButton
        aria-label="Open Menu"
        size="lg"
        mr={2}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        display={{ md: 'none' }}
        onClick={onToggle}
      />
      <VStack
        display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
        flexDirection={{ md: 'row' }}
        width="full"
        alignItems="center"
        height="100%"
        spacing={4}
      >
        {headings.map((heading) => (
          <Box key={heading.id} ml={heading.level === 'H2' ? 2 : heading.level === 'H3' ? 4 : 0}>
            <Link
              href={`#${heading.id}`}
              color={activeId === heading.id ? "teal.500" : "gray.700"}
              fontWeight={activeId === heading.id ? "bold" : "normal"}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' })
                if (isOpen) onToggle() // Close the menu after clicking on a link in mobile view
              }}
            >
              {heading.text}
            </Link>
          </Box>
        ))}
      </VStack>
    </Flex>
  )
}

export default PageOutline