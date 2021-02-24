import React, { memo } from 'react';
import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
  children: React.ReactElement;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  className = '',
  children,
}) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);

export default memo(Tooltip);
